import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem } from "@heroui/navbar";
import { Button, Image, Link } from "@heroui/react";

export default function Nav() {
  return (
    <Navbar 
        maxWidth={"2xl"} 
        isBlurred={false}
        position={"static"}
        classNames={{
            base: "bg-transparent",
            content: "bg-transparent",
            item: "bg-transparent",
        }}
        className={"fixed top-0 left-0 w-full z-[20] py-6"}
    >
        <NavbarBrand className="text-2xl font-bold">
            <Button 
                as={Link} 
                radius={"none"}
                href="/" 
                startContent={<Image src="/app_icon_waveful_rounded.svg" alt="Waveful" className={"block bg-transparent h-16"} />}
                className="text-4xl py-12 bg-transparent text-default-900 font-semibold"
            >
            <span className="hidden md:inline">Waveful</span>
            </Button>
        </NavbarBrand>
        <NavbarContent justify="end">
            <NavbarItem>
                <Button 
                    as={Link} 
                    radius={"lg"}
                    href="https://waveful.app/download"
                    size={"lg"}
                    className="py-8 text-xl font-semibold text-default-100 bg-default-900"
                >
                    Download the App
                </Button>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  );
}