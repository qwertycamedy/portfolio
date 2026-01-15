import { navLinks } from "@/utils"
import { Card, Section } from "../ui"

export const About = () => {
    return (
        <Section id={navLinks[1].path}>
            <Card className={'h-100'}>
                About
            </Card>
        </Section>
    )
}