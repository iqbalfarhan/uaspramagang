import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";
import { login } from "./actions";

const LoginPage = () => {
  return (
    <>
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Masuk dengan menggunakan username dan password yang sudah terdaftar.
          </CardDescription>
        </CardHeader>
        <form action={login}>
          <CardContent className="space-y-4">
            <div>
              <Label>Username</Label>
              <Input
                name="email"
                type="text"
                placeholder="Email address"
                defaultValue={"iqbalfarhan1996@gmail.com"}
              />
            </div>
            <div>
              <Label>Password</Label>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                defaultValue={"adminoke"}
              />
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Button>
              <LogIn />
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
};

export default LoginPage;
