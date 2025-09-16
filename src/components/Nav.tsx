import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@heroui/navbar";
import { Avatar, Button, Image, Link } from "@heroui/react";

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
                startContent={<Image src="/logo_waveful_colored.png" alt="Waveful" className={"hidden md:block bg-transparent h-24"} />}
                className="text-4xl py-12 bg-transparent text-default-900 font-semibold"
            >
            Waveful
        </Button>
        </NavbarBrand>
        <NavbarContent justify="end">
            <NavbarItem>
                <Button 
                    as={Link} 
                    radius={"lg"}
                    href="/"
                    size={"lg"}
                    className={"bg-default-900 text-default-100"}
                >
                    Download the App
                </Button>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  );
}