import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  import { Button } from "@/components/ui/button";
  import { Trash2 } from "lucide-react";
  import { deleteKelas } from "./action";
  
  const DeleteKelasButton = ({ kelasId }: { kelasId: string }) => {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size={"icon"} variant={"ghost"}>
            <Trash2 />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Kelas</AlertDialogTitle>
            <AlertDialogDescription>
              Apakah anda yakin untuk menghapus kelas ini? action ini tidak dapat
              kembalikan
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <form action={deleteKelas}>
              <input type="hidden" name="kelasId" value={kelasId} />
              <Button>Ya hapus kelas</Button>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  
  export default DeleteKelasButton;
  