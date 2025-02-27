import PageHeader from '@/components/app/page-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CheckIcon } from 'lucide-react'
import React from 'react'
import { createMahasiswa } from './action'
import { createClient } from '@/lib/supabase/client'

const CreateMahasiswaPage = async () => {
    const supabase = createClient();
    const { data: kelas } = await supabase.from('kelas').select();
  return (
    <>
    <PageHeader title="Create Mahasiswa" />
    <Card className='w-full max-w-sm mx-auto'>
        <form action={createMahasiswa}>
        <CardContent className="space-y-4 mt-6">
        <Label>Nama Mahasiswa</Label>
             <Input type="text" name="name" placeholder='Pilih Mahasiswa' required />
          <Label>NIM</Label>
            <Input type="text" name="nim" placeholder="Contoh: 132010040002" required />
          <Label>Pilih Kelas</Label>
            <Select name="kelas">
                <SelectTrigger>
                    <SelectValue placeholder="Pilih Kelas"/>
                </SelectTrigger>
                    <SelectContent>
                        {kelas?.map(kls => (
                            <SelectItem key={kls.id} value={kls.id}>{kls.name}</SelectItem>
                        ))}
                    </SelectContent>
            </Select>
        </CardContent>
          <CardFooter>
            <Button type="submit"> <CheckIcon/> Simpan</Button>
          </CardFooter>
        </form>
    </Card>
    
    </>
  )
}

export default CreateMahasiswaPage
