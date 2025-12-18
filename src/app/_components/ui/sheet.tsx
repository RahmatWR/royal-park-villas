// import * as SheetPrimitive from "@radix-ui/react-dialog";
// import { cva, type VariantProps } from "class-variance-authority";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
// import { X } from "lucide-react";
// import * as React from "react";

// import { cn } from "../../_lib/utils";

// const Sheet = SheetPrimitive.Root;

// const SheetTrigger = SheetPrimitive.Trigger;

// const SheetClose = SheetPrimitive.Close;

// const SheetPortal = SheetPrimitive.Portal;

// const SheetOverlay = React.forwardRef<
// 	React.ElementRef<typeof SheetPrimitive.Overlay>,
// 	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
// >(({ className, ...props }, ref) => (
// 	<SheetPrimitive.Overlay
// 		className={cn(
// 			"fixed inset-0 z-50 bg-black/80 animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 fade-in-0",
// 			className
// 		)}
// 		{...props}
// 		ref={ref}
// 	/>
// ));
// SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

// const sheetVariants = cva(
// 	"fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 duration-500",
// 	{
// 		variants: {
// 			side: {
// 				top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top slide-in-from-top",
// 				bottom:
// 					"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom slide-in-from-bottom",
// 				left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left slide-in-from-left sm:max-w-sm",
// 				right:
// 					"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right slide-in-from-right sm:max-w-sm",
// 			},
// 		},
// 		defaultVariants: {
// 			side: "right",
// 		},
// 	}
// );

// interface SheetContentProps
// 	extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
// 		VariantProps<typeof sheetVariants> {}

// // const SheetContent = React.forwardRef<
// // 	React.ElementRef<typeof SheetPrimitive.Content>,
// // 	SheetContentProps
// // >(({ side = "right", className, children, ...props }, ref) => (
// // 	<SheetPortal>
// // 		<SheetOverlay />
// // 		<SheetPrimitive.Content
// // 			ref={ref}
// // 			className={cn(sheetVariants({ side }), className)}
// // 			{...props}>
// // 			{children}
// // 			<SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
// // 				<X className="h-4 w-4" />
// // 				<span className="sr-only">Close</span>
// // 			</SheetPrimitive.Close>
// // 		</SheetPrimitive.Content>
// // 	</SheetPortal>
// // ));
// const SheetContent = React.forwardRef<
// 	React.ElementRef<typeof SheetPrimitive.Content>,
// 	SheetContentProps
// >(({ side = "right", className, children, ...props }, ref) => (
// 	<SheetPortal>
// 		<SheetOverlay />
// 		<SheetPrimitive.Content
// 			ref={ref}
// 			className={cn(sheetVariants({ side }), className)}
// 			{...props}>
// 			{/* ✅ REQUIRED for accessibility */}
// 			<VisuallyHidden>
// 				<SheetPrimitive.Title>Navigation Menu</SheetPrimitive.Title>
// 			</VisuallyHidden>

// 			{children}

// 			<SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
// 				<X className="h-4 w-4" />
// 				<span className="sr-only">Close</span>
// 			</SheetPrimitive.Close>
// 		</SheetPrimitive.Content>
// 	</SheetPortal>
// ));

// SheetContent.displayName = SheetPrimitive.Content.displayName;

// const SheetHeader = ({
// 	className,
// 	...props
// }: React.HTMLAttributes<HTMLDivElement>) => (
// 	<div
// 		className={cn(
// 			"flex flex-col space-y-2 text-center sm:text-left",
// 			className
// 		)}
// 		{...props}
// 	/>
// );
// SheetHeader.displayName = "SheetHeader";

// const SheetFooter = ({
// 	className,
// 	...props
// }: React.HTMLAttributes<HTMLDivElement>) => (
// 	<div
// 		className={cn(
// 			"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
// 			className
// 		)}
// 		{...props}
// 	/>
// );
// SheetFooter.displayName = "SheetFooter";

// const SheetTitle = React.forwardRef<
// 	React.ElementRef<typeof SheetPrimitive.Title>,
// 	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
// >(({ className, ...props }, ref) => (
// 	<SheetPrimitive.Title
// 		ref={ref}
// 		className={cn("text-lg font-semibold text-foreground", className)}
// 		{...props}
// 	/>
// ));
// SheetTitle.displayName = SheetPrimitive.Title.displayName;

// const SheetDescription = React.forwardRef<
// 	React.ElementRef<typeof SheetPrimitive.Description>,
// 	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
// >(({ className, ...props }, ref) => (
// 	<SheetPrimitive.Description
// 		ref={ref}
// 		className={cn("text-sm text-muted-foreground", className)}
// 		{...props}
// 	/>
// ));
// SheetDescription.displayName = SheetPrimitive.Description.displayName;

// export {
// 	Sheet,
// 	SheetClose,
// 	SheetContent,
// 	SheetDescription,
// 	SheetFooter,
// 	SheetHeader,
// 	SheetOverlay,
// 	SheetPortal,
// 	SheetTitle,
// 	SheetTrigger,
// };

// import * as SheetPrimitive from "@radix-ui/react-dialog";
// import { cva, type VariantProps } from "class-variance-authority";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
// import { X } from "lucide-react";
// import * as React from "react";

// import { cn } from "../../_lib/utils";

// const Sheet = SheetPrimitive.Root;
// const SheetTrigger = SheetPrimitive.Trigger;
// const SheetClose = SheetPrimitive.Close;
// const SheetPortal = SheetPrimitive.Portal;

// /* ================= OVERLAY ================= */

// const SheetOverlay = React.forwardRef<
// 	React.ElementRef<typeof SheetPrimitive.Overlay>,
// 	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
// >(({ className, ...props }, ref) => (
// 	<SheetPrimitive.Overlay
// 		ref={ref}
// 		className={cn(
// 			"fixed inset-0 z-50 bg-black/80 animate-in fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
// 			className
// 		)}
// 		{...props}
// 	/>
// ));
// SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

// /* ================= VARIANTS ================= */

// const sheetVariants = cva(
// 	"fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out animate-in duration-500 data-[state=closed]:animate-out data-[state=closed]:duration-300",
// 	{
// 		variants: {
// 			side: {
// 				top: "inset-x-0 top-0 border-b slide-in-from-top data-[state=closed]:slide-out-to-top",
// 				bottom:
// 					"inset-x-0 bottom-0 border-t slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
// 				left: "inset-y-0 left-0 h-full w-3/4 border-r slide-in-from-left data-[state=closed]:slide-out-to-left sm:max-w-sm",
// 				right:
// 					"inset-y-0 right-0 h-full w-3/4 border-l slide-in-from-right data-[state=closed]:slide-out-to-right sm:max-w-sm",
// 			},
// 		},
// 		defaultVariants: {
// 			side: "right",
// 		},
// 	}
// );

// interface SheetContentProps
// 	extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
// 		VariantProps<typeof sheetVariants> {}

// /* ================= CONTENT ================= */

// const SheetContent = React.forwardRef<
// 	React.ElementRef<typeof SheetPrimitive.Content>,
// 	// ✅ FIX PENTING: explicit union agar side="right" tidak error di consumer
// 	SheetContentProps & {
// 		side?: "top" | "bottom" | "left" | "right";
// 	}
// >(({ side = "right", className, children, ...props }, ref) => (
// 	<SheetPortal>
// 		<SheetOverlay />

// 		<SheetPrimitive.Content
// 			ref={ref}
// 			className={cn(sheetVariants({ side }), className)}
// 			{...props}>
// 			{/* Required for accessibility */}
// 			<VisuallyHidden>
// 				<SheetPrimitive.Title>Navigation Menu</SheetPrimitive.Title>
// 			</VisuallyHidden>

// 			{children}

// 			<SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
// 				<X className="h-4 w-4" />
// 				<span className="sr-only">Close</span>
// 			</SheetPrimitive.Close>
// 		</SheetPrimitive.Content>
// 	</SheetPortal>
// ));

// SheetContent.displayName = SheetPrimitive.Content.displayName;

// /* ================= OPTIONAL HELPERS ================= */

// const SheetHeader = ({
// 	className,
// 	...props
// }: React.HTMLAttributes<HTMLDivElement>) => (
// 	<div
// 		className={cn(
// 			"flex flex-col space-y-2 text-center sm:text-left",
// 			className
// 		)}
// 		{...props}
// 	/>
// );
// SheetHeader.displayName = "SheetHeader";

// const SheetFooter = ({
// 	className,
// 	...props
// }: React.HTMLAttributes<HTMLDivElement>) => (
// 	<div
// 		className={cn(
// 			"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
// 			className
// 		)}
// 		{...props}
// 	/>
// );
// SheetFooter.displayName = "SheetFooter";

// const SheetTitle = React.forwardRef<
// 	React.ElementRef<typeof SheetPrimitive.Title>,
// 	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
// >(({ className, ...props }, ref) => (
// 	<SheetPrimitive.Title
// 		ref={ref}
// 		className={cn("text-lg font-semibold text-foreground", className)}
// 		{...props}
// 	/>
// ));
// SheetTitle.displayName = SheetPrimitive.Title.displayName;

// const SheetDescription = React.forwardRef<
// 	React.ElementRef<typeof SheetPrimitive.Description>,
// 	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
// >(({ className, ...props }, ref) => (
// 	<SheetPrimitive.Description
// 		ref={ref}
// 		className={cn("text-sm text-muted-foreground", className)}
// 		{...props}
// 	/>
// ));
// SheetDescription.displayName = SheetPrimitive.Description.displayName;

// /* ================= EXPORTS ================= */

// export {
// 	Sheet,
// 	SheetTrigger,
// 	SheetClose,
// 	SheetContent,
// 	SheetHeader,
// 	SheetFooter,
// 	SheetTitle,
// 	SheetDescription,
// 	SheetOverlay,
// 	SheetPortal,
// };

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "../../_lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

/* ================= OVERLAY ================= */

const SheetOverlay = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		ref={ref}
		className={cn("sheet-overlay fixed inset-0 z-50 bg-black/80", className)}
		{...props}
	/>
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

/* ================= VARIANTS ================= */

const sheetVariants = cva(
	"sheet-content fixed z-50 gap-4 bg-background p-6 shadow-lg",
	{
		variants: {
			side: {
				right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
				left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
				top: "inset-x-0 top-0 border-b",
				bottom: "inset-x-0 bottom-0 border-t",
			},
		},
		defaultVariants: {
			side: "right",
		},
	}
);

interface SheetContentProps
	extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
		VariantProps<typeof sheetVariants> {}

/* ================= CONTENT ================= */

const SheetContent = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Content>,
	SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
	<SheetPortal>
		<SheetOverlay />

		<SheetPrimitive.Content
			ref={ref}
			className={cn(sheetVariants({ side }), className)}
			{...props}>
			<VisuallyHidden>
				<SheetPrimitive.Title>Navigation Menu</SheetPrimitive.Title>
			</VisuallyHidden>

			{children}

			<SheetPrimitive.Close className="absolute right-4 top-5.5 rounded-sm opacity-70 transition-opacity hover:opacity-100">
				<X className="h-5 w-5 cursor-pointer" />
				<span className="sr-only">Close</span>
			</SheetPrimitive.Close>
		</SheetPrimitive.Content>
	</SheetPortal>
));

SheetContent.displayName = SheetPrimitive.Content.displayName;

/* ================= EXPORTS ================= */

export {
	Sheet,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetOverlay,
	SheetPortal,
};
