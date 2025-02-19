import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createClient } from "@/lib/supabase/client";

const CreateMahasiswa = async () => {
  const supabase = createClient();
  const { data: kelas } = await supabase.from("kelas").select();
  return (
    <div>
      <div>
        <Label>Pilih kelas</Label>
        <Select name="kelas_id">
          <SelectTrigger>
            <SelectValue placeholder="Pilih kelas" />
          </SelectTrigger>
          <SelectContent>
            {kelas?.map((kls) => (
              <SelectItem key={kls.id} value={kls.id}>
                {kls.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CreateMahasiswa;
