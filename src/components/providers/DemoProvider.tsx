"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type {
  BuyerBooking,
  CartItem,
  DemoRole,
  LocalBuyerOrder,
} from "@/lib/types";
import {
  buyerLibraryProductIds,
  buyerSavedCreatorIds,
  buyerSavedProductIds,
  buyerSavedServiceIds,
  getProduct,
  getService,
  seedBuyerBookings,
  seedBuyerOrders,
  seedFollowingIds,
} from "@/lib/mock";

type SavedState = {
  products: string[];
  services: string[];
  creators: string[];
};

type DemoContextValue = {
  ready: boolean;
  role: DemoRole;
  setRole: (role: DemoRole) => void;
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  cart: CartItem[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  setCartQty: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotalCents: number;
  saved: SavedState;
  toggleSavedProduct: (id: string) => void;
  toggleSavedService: (id: string) => void;
  toggleSavedCreator: (id: string) => void;
  followingIds: string[];
  toggleFollow: (id: string) => void;
  libraryIds: string[];
  buyerOrders: LocalBuyerOrder[];
  simulateCheckout: () => boolean;
  bookings: BuyerBooking[];
  simulateBooking: (input: {
    serviceId: string;
    creatorId: string;
    packageName: string;
    amountCents: number;
    requestedFor: string;
  }) => void;
  toast: string | null;
  notify: (message: string) => void;
};

const DemoContext = createContext<DemoContextValue | null>(null);

const initialSaved: SavedState = {
  products: buyerSavedProductIds,
  services: buyerSavedServiceIds,
  creators: buyerSavedCreatorIds,
};

export function DemoProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<DemoRole>("creator");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [saved, setSaved] = useState<SavedState>(initialSaved);
  const [followingIds, setFollowingIds] = useState<string[]>(seedFollowingIds);
  const [extraLibrary, setExtraLibrary] = useState<string[]>([]);
  const [extraOrders, setExtraOrders] = useState<LocalBuyerOrder[]>([]);
  const [extraBookings, setExtraBookings] = useState<BuyerBooking[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const notify = useCallback((message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 3200);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed((prev) => !prev);
  }, []);

  const addToCart = useCallback(
    (productId: string) => {
      setCart((prev) => {
        const existing = prev.find((item) => item.productId === productId);
        return existing
          ? prev.map((item) =>
              item.productId === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          : [...prev, { productId, quantity: 1 }];
      });
      notify("Added to demo cart. No payment was taken.");
    },
    [notify],
  );

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((item) => item.productId !== productId));
  }, []);

  const setCartQty = useCallback((productId: string, quantity: number) => {
    setCart((prev) =>
      quantity < 1
        ? prev.filter((item) => item.productId !== productId)
        : prev.map((item) =>
            item.productId === productId ? { ...item, quantity } : item,
          ),
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const toggleFollow = useCallback((id: string) => {
    setFollowingIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  const toggleList = useCallback((key: keyof SavedState, id: string) => {
    setSaved((prev) => {
      const list = prev[key];
      const nextList = list.includes(id)
        ? list.filter((x) => x !== id)
        : [...list, id];
      return { ...prev, [key]: nextList };
    });
  }, []);

  const simulateCheckout = useCallback(() => {
    if (cart.length === 0) return false;
    const created: LocalBuyerOrder[] = [];
    const ids: string[] = [];
    for (const item of cart) {
      const product = getProduct(item.productId);
      if (!product) continue;
      ids.push(product.id);
      created.push({
        id: `demo_${Date.now().toString(36)}_${item.productId}`,
        productId: product.id,
        title: product.title,
        amountCents: product.priceCents * item.quantity,
        createdAt: new Date().toISOString(),
        demo: true,
      });
    }
    setExtraOrders((prev) => [...created, ...prev]);
    setExtraLibrary((prev) => Array.from(new Set([...ids, ...prev])));
    clearCart();
    notify(
      "Demo checkout complete. No charge. Items added to your mock library.",
    );
    return true;
  }, [cart, clearCart, notify]);

  const simulateBooking = useCallback(
    (input: {
      serviceId: string;
      creatorId: string;
      packageName: string;
      amountCents: number;
      requestedFor: string;
    }) => {
      const service = getService(input.serviceId);
      const booking: BuyerBooking = {
        id: `bk_demo_${Date.now().toString(36)}`,
        serviceId: input.serviceId,
        creatorId: input.creatorId,
        packageName: input.packageName,
        status: "requested",
        requestedFor: input.requestedFor,
        amountCents: input.amountCents,
      };
      setExtraBookings((prev) => [booking, ...prev]);
      notify(
        `Demo booking requested${service ? ` for ${service.title}` : ""}. Nothing was sent or charged.`,
      );
    },
    [notify],
  );

  const cartTotalCents = useMemo(
    () =>
      cart.reduce((sum, item) => {
        const product = getProduct(item.productId);
        return sum + (product ? product.priceCents * item.quantity : 0);
      }, 0),
    [cart],
  );

  const libraryIds = useMemo(
    () => Array.from(new Set([...buyerLibraryProductIds, ...extraLibrary])),
    [extraLibrary],
  );

  const buyerOrders = useMemo<LocalBuyerOrder[]>(() => {
    const seeded: LocalBuyerOrder[] = seedBuyerOrders.map((order) => ({
      id: order.id,
      productId: order.itemId,
      title: order.itemTitle,
      amountCents: order.amountCents,
      createdAt: order.createdAt,
      demo: true,
    }));
    return [...extraOrders, ...seeded];
  }, [extraOrders]);

  const bookings = useMemo(
    () => [...extraBookings, ...seedBuyerBookings],
    [extraBookings],
  );

  const value = useMemo<DemoContextValue>(
    () => ({
      ready: true,
      role,
      setRole,
      sidebarCollapsed,
      toggleSidebar,
      mobileNavOpen,
      setMobileNavOpen,
      searchOpen,
      setSearchOpen,
      cart,
      addToCart,
      removeFromCart,
      setCartQty,
      clearCart,
      cartCount: cart.reduce((n, item) => n + item.quantity, 0),
      cartTotalCents,
      saved,
      toggleSavedProduct: (id) => toggleList("products", id),
      toggleSavedService: (id) => toggleList("services", id),
      toggleSavedCreator: (id) => toggleList("creators", id),
      followingIds,
      toggleFollow,
      libraryIds,
      buyerOrders,
      simulateCheckout,
      bookings,
      simulateBooking,
      toast,
      notify,
    }),
    [
      addToCart,
      buyerOrders,
      bookings,
      cart,
      cartTotalCents,
      clearCart,
      followingIds,
      libraryIds,
      mobileNavOpen,
      notify,
      removeFromCart,
      role,
      saved,
      searchOpen,
      setCartQty,
      sidebarCollapsed,
      simulateBooking,
      simulateCheckout,
      toast,
      toggleFollow,
      toggleList,
      toggleSidebar,
    ],
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used within DemoProvider");
  return ctx;
}
