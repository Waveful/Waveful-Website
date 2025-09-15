import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@heroui/navbar";
import { Avatar, Button, Link } from "@heroui/react";

export default function Nav() {
  return (
    <Navbar 
        maxWidth={"2xl"} 
        isBlurred={false}
        classNames={{
            base: "bg-transparent",
            content: "bg-transparent",
            item: "bg-transparent",
        }}
    >
        <NavbarBrand className="text-2xl font-bold">
            <Button 
            as={Link} 
            radius={"none"}
            href="/" 
            startContent={<Avatar src="/logo_waveful_black.png" alt="Waveful" className={"bg-transparent"} size="lg" />}
            className="text-4xl bg-transparent text-default-900 font-semibold"
            >
            Waveful
        </Button>
        </NavbarBrand>
        <NavbarContent justify="end">
            <NavbarItem>
                <Button 
                    as={Link} 
                    radius={"sm"}
                    href="/"
                    className={"bg-default-900 text-default-100"}
                >
                    Download the App
                </Button>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  );
}