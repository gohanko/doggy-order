import { NavigationBar } from "@/components/organisms/navigation-bar";
import { Footer } from '@/components/organisms/footer';

type TUserAuthenticationTemplate = {
    children: React.ReactElement | React.ReactElement[];
}

export const UserAuthenticationTemplate = ({
    children
}: TUserAuthenticationTemplate) => (
    <>
        <NavigationBar />
    
        <main>
            { children }
        </main>

        <Footer />
    </>
)