interface CustomHeaderProps {
  title: string;
  description?: string;
}

export default function CustomHeader({
  title,
  description,
}: CustomHeaderProps) {
  return (
    <header className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-2xl font-bold">{title}</h1>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </header>
  );
}
