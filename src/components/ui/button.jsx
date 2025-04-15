
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Palette, Brush, Flower, Frame, PencilLine, GalleryHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-santaran-vermilion to-santaran-amber text-white shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-0",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-santaran-jade bg-transparent text-santaran-jade hover:bg-santaran-jade/10 active:bg-santaran-jade/20",
        secondary:
          "bg-santaran-jade text-white hover:bg-santaran-jade/90 shadow-md hover:shadow-lg",
        ghost: "hover:bg-santaran-cream/80 hover:text-santaran-indigo",
        link: "text-santaran-vermilion underline-offset-4 hover:underline",
        artistic: "bg-white border border-santaran-jade/20 text-santaran-jade hover:bg-santaran-jade hover:text-white shadow-md hover:shadow-lg relative overflow-hidden",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 rounded-full",
      },
      hasIcon: {
        true: "pl-3",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Art-related icon components to use with buttons
export const ArtIcons = {
  Brush: () => <Brush className="w-4 h-4" />,
  Palette: () => <Palette className="w-4 h-4" />,
  Flower: () => <Flower className="w-4 h-4" />,
  Frame: () => <Frame className="w-4 h-4" />,
  Pencil: () => <PencilLine className="w-4 h-4" />,
  Gallery: () => <GalleryHorizontal className="w-4 h-4" />,
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: keyof typeof ArtIcons
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const IconComponent = icon ? ArtIcons[icon] : null
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, hasIcon: !!icon, className }))}
        ref={ref}
        {...props}
      >
        {IconComponent && <IconComponent />}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

