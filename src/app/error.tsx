"use client";

const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <div className="flex justify-center items-center text-4xl text-black font-semibold mt-48">
      Oh No! {error.message}. Please Try Again.
    </div>
  );
};

export default ErrorBoundary;
