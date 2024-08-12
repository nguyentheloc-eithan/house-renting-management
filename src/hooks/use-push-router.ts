import { useRouter } from 'next/navigation';

export const usePushRouter = () => {
  const router = useRouter();

  const { push } = router;

  router.push = (href, options) => {
    push(href, options);
  };

  return router;
};
