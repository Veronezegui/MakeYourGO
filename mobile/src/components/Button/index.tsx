import React from "react";

import { Container, Touch, Title } from "./styles";

interface ButtonProps {
    title: string;
}

export function Button({title}: ButtonProps) {
    return (
        <Container>
            <Touch>
                <Title>{title}</Title>
            </Touch>
        </Container>
    )
}