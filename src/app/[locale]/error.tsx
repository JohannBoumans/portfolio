'use client';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error(props: Props) {
  const { reset } = props;
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
