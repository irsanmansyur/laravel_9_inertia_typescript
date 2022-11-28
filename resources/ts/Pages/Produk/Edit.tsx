import React from "react";
import DashboardLayout from "@ts/Layouts/DashboardLayout";
import { Card, CardHeader, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { Laravel } from "@ts/utils/interfaces/PaginateLaravelInterface";
import ProdukDetail from "@ts/Components/produk/StepInputEdit";
import InputProdukImages from "@ts/Components/produk/edit/InputProdukImages";
import InputProdukVariantsEdit from "@ts/Components/produk/edit/InputProdukVariants";
import InputProdukLinksEdit from "@ts/Components/produk/edit/InputProdukLinks";
type Props = {
  produk: Laravel.Interface.Model<App.Models.Produk>;
};
export default function Edit({ produk }: Props) {
  return (
    <DashboardLayout title="Edit produk">
      <Card className="mt-20">
        <CardHeader variant="gradient" color="blue-gray" className="px-4 mr-auto h-10 place-items-center flex w-auto ">
          Edit Product
        </CardHeader>
        <div className="sm:m-6 m-2">
          <Tabs value="detail_produk">
            <TabsHeader className="flex w-full overflow-x-auto ">
              <Tab value={"detail_produk"} className="flex w-auto px-4  text-xs sm:text-base">
                Detail Produk
              </Tab>
              <Tab value={"gambar_produk"} className="flex w-auto px-4 text-xs sm:text-base">
                Gambar
              </Tab>
              <Tab value={"variant_produk"} className="flex w-auto px-4 text-xs sm:text-base">
                Variant Produk
              </Tab>
              <Tab value={"link_produk"} className="flex w-auto px-2 sm:px-4 text-xs sm:text-base">
                Link Produk
              </Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value={"detail_produk"} className="px-0">
                <div className="-mx-4 sm:mx-0">
                  <ProdukDetail produk={produk.data} />
                </div>
              </TabPanel>
              <TabPanel value={"gambar_produk"} className="px-0">
                <div className="-mx-4 sm:mx-0">
                  <InputProdukImages images={produk.data.images} />{" "}
                </div>
              </TabPanel>
              <TabPanel value={"variant_produk"} className="px-0 border  my-2 rounded shadow p-4">
                {produk.data.variants && <InputProdukVariantsEdit variants={produk.data.variants} />}
              </TabPanel>
              <TabPanel value={"link_produk"} className="px-0 border  my-2 rounded shadow p-4">
                {produk.data.links && <InputProdukLinksEdit links={produk.data.links} />}
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </Card>
    </DashboardLayout>
  );
}
