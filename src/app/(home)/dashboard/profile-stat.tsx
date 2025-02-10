import { getCurrentUser } from "@/app/(auth)/login/actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { getAvatarLink, getInitials } from "@/lib/utils";

const ProfileStat = async () => {
  const user = await getCurrentUser();
  return (
    <Card>
      <CardContent className="flex flow-row pt-6 gap-4 items-center">
        <div>
          <Avatar className="size-8 bg-primary rounded-lg">
            <AvatarImage src={getAvatarLink(user.username)} alt={user.name} />
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <CardDescription>{user.name}</CardDescription>
          <CardTitle>{user.username}</CardTitle>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileStat;
