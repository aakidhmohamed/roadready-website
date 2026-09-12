type PhotographySlotProps = {
  index: string;
  title: string;
  note: string;
  ratio: 'landscape' | 'portrait' | 'square';
  className?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
};

export function PhotographySlot({ index, title, note, ratio, className = '', src, alt = '', priority = false }: PhotographySlotProps) {
  return (
    <figure className={`photo-slot photo-${ratio} ${src ? 'has-photo' : ''} ${className}`.trim()}>
      {src ? (
        <img
          className="photo-slot-image"
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
        />
      ) : (
        <><div className="photo-grid" aria-hidden="true" /><figcaption><span>PHOTO {index}</span><strong>{title}</strong><small>{note}</small></figcaption></>
      )}
    </figure>
  );
}

