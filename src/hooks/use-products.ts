import { useState, useEffect, useCallback, useMemo } from 'react';
import { MOCK_PRODUCTS, Product } from '_mock-data';

export const useProducts = (category?: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(() => resolve(null), 800));
      setProducts(MOCK_PRODUCTS);
    } catch (e) {
      setError('Failed to fetch products. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredData = useMemo(() => {
    if (!category) return products;
    return products.filter(
      p => p.category.toLowerCase() === category.toLowerCase(),
    );
  }, [products, category]);

  const getProductById = useCallback(
    (id: string) => {
      return products.find(p => p.id === id);
    },
    [products],
  );

  return {
    products: filteredData,
    isLoading,
    error,
    refetch: fetchProducts,
    getProductById,
  };
};
