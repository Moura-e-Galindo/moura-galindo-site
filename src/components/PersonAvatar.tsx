import { useState } from "react";

interface PersonAvatarProps {
  image?: string;
  initials: string;
  alt: string;
}

export function PersonAvatar({ image, initials, alt }: PersonAvatarProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(image) && !imageFailed;

  return (
    <div className="flex items-center justify-center h-32 w-32 rounded-full border border-gold/40 bg-card mx-auto group-hover:border-gold transition-colors overflow-hidden">
      {showImage ? (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="font-serif text-4xl font-medium text-gold">{initials}</span>
      )}
    </div>
  );
}
