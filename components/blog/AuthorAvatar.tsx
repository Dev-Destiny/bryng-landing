import Image from "next/image";

type AuthorAvatarSize = "sm" | "md" | "lg";

interface AuthorAvatarProps {
  size?: AuthorAvatarSize;
}

const sizeClasses: Record<AuthorAvatarSize, string> = {
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-10 w-10",
};

export default function AuthorAvatar({ size = "md" }: AuthorAvatarProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/80 shadow-sm ${sizeClasses[size]}`}
    >
      <Image
        src="/Bryng_Icon.svg"
        alt=""
        width={64}
        height={64}
        className="h-full w-full object-cover"
      />
    </span>
  );
}
