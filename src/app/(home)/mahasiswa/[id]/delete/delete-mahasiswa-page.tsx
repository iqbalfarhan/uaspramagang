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
import { deleteMahasiswa } from "./action";

const DeleteMahasiswaButton = ({ mahasiswaId }: { mahasiswaId: string }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Mahasiswa</AlertDialogTitle>
          <AlertDialogDescription>
            Apakah anda yakin untuk menghapus Mahasiswa ini? action ini tidak
            dapat kembalikan
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <form action={deleteMahasiswa}>
            <input type="hidden" name="mahasiswaId" value={mahasiswaId} />
            <Button>Ya hapus Mahasiswa</Button>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteMahasiswaButton;
