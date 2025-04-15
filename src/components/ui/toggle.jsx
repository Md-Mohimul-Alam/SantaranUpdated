
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { Palette, Brush, Flower, Frame, PencilLine, GalleryHorizontal, Paintbrush } from "lucide-react"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-santaran-jade data-[state=on]:text-white",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        artistic: 
          "bg-white border-2 border-santaran-jade/20 text-santaran-indigo hover:bg-santaran-cream/80 data-[state=on]:bg-santaran-vermilion shadow-md backdrop-blur-sm",
        fancy:
          "bg-gradient-to-br from-santaran-cream to-white border-2 border-santaran-terracotta/30 text-santaran-indigo hover:border-santaran-terracotta transition-all duration-300 data-[state=on]:bg-gradient-to-br data-[state=on]:from-santaran-vermilion data-[state=on]:to-santaran-amber data-[state=on]:border-santaran-amber",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
        xl: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Art-related icon components to use with toggles
export const ArtToggleIcons = {
  Brush: () => <Brush className="w-4 h-4 mr-2" />,
  Palette: () => <Palette className="w-4 h-4 mr-2" />,
  Flower: () => <Flower className="w-4 h-4 mr-2" />,
  Frame: () => <Frame className="w-4 h-4 mr-2" />,
  Pencil: () => <PencilLine className="w-4 h-4 mr-2" />,
  Gallery: () => <GalleryHorizontal className="w-4 h-4 mr-2" />,
  Paintbrush: () => <Paintbrush className="w-5 h-5 mr-2" />,
}

interface ToggleProps extends 
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
  VariantProps<typeof toggleVariants> {
    icon?: keyof typeof ArtToggleIcons
  }

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, icon, children, ...props }, ref) => {
  const IconComponent = icon ? ArtToggleIcons[icon] : null;
  
  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    >
      {IconComponent && <IconComponent />}
      {children}
    </TogglePrimitive.Root>
  )
})

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
