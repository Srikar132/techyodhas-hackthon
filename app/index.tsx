import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";


const Index = () => {
    const { isSignedIn } = useAuth()

    if (!isSignedIn) {
        return <Redirect href={"/(auth)/welcome" as any} />;
    }

    return <Redirect href={"/(root)/(tabs)/home" as any} />;
};


export default Index;