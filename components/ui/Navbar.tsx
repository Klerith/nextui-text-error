import { Container, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";


export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            paddingLeft: '20px',
            backgroundColor: theme?.colors.gray900.value
        }}
        >
            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
                alt="icono"
                width={70}
                height={70}
            />
            <Text h2>P</Text>
            <Text h3>okémon</Text>
        </div>
    )
};
