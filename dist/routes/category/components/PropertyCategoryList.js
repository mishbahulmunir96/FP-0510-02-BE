"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pagination_1 = __importDefault(require("@/components/Pagination"));
const button_1 = require("@/components/ui/button");
const skeleton_1 = require("@/components/ui/skeleton");
const table_1 = require("@/components/ui/table");
const useDeleteCategory_1 = __importDefault(require("@/hooks/api/category/useDeleteCategory"));
const useGetCategory_1 = __importDefault(require("@/hooks/api/category/useGetCategory"));
const useUpdateCategory_1 = __importDefault(require("@/hooks/api/category/useUpdateCategory"));
const react_1 = require("next-auth/react");
const react_2 = require("react");
const Editcategory_1 = require("./Editcategory");
const PropertyCategoryList = ({ propertyCategoryId, }) => {
    var _a;
    const session = (0, react_1.useSession)();
    const [page, setPage] = (0, react_2.useState)(1);
    const { data, isPending } = (0, useGetCategory_1.default)({
        userId: (_a = session.data) === null || _a === void 0 ? void 0 : _a.user.id,
        take: 10,
    });
    const onPageChange = ({ selected }) => {
        setPage(selected + 1);
    };
    const { mutateAsync: deleteCategory, isPending: pendingDelete } = (0, useDeleteCategory_1.default)();
    const { mutateAsync: updateCategory, isPending: pendingUpdate } = (0, useUpdateCategory_1.default)();
    if (isPending) {
        return (<div className="container mx-auto max-w-7xl">
        <skeleton_1.Skeleton className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-slate-200"/>
      </div>);
    }
    if (!data) {
        return (<h5 className="container mx-auto mb-3 max-w-7xl text-center font-semibold md:text-left">
        Category Not Found
      </h5>);
    }
    return (<>
      <h5 className="container mx-auto mb-3 max-w-7xl text-center font-semibold md:text-left">
        Category List
      </h5>
      <section className="container mx-auto max-w-7xl rounded-lg bg-white p-5">
        <table_1.Table>
          <table_1.TableCaption>A list of your property category</table_1.TableCaption>
          <table_1.TableHeader>
            <table_1.TableRow>
              <table_1.TableHead>Name</table_1.TableHead>
              <table_1.TableHead>Action</table_1.TableHead>
            </table_1.TableRow>
          </table_1.TableHeader>
          <table_1.TableBody>
            {data === null || data === void 0 ? void 0 : data.data.map((category) => {
            return (<table_1.TableRow key={category.id}>
                  <table_1.TableCell className="font-medium">{category.name}</table_1.TableCell>
                  <table_1.TableCell className="flex items-center gap-3">
                    <button_1.Button variant={"destructive"} disabled={pendingDelete} onClick={() => deleteCategory(category.id)}>
                      {pendingDelete ? "Deleting..." : "Delete"}
                    </button_1.Button>
                    <Editcategory_1.EditCategoryButton id={category.id}/>
                  </table_1.TableCell>
                </table_1.TableRow>);
        })}
          </table_1.TableBody>
        </table_1.Table>
      </section>
      <div className="container mx-auto mt-10 flex max-w-7xl justify-center">
        <Pagination_1.default take={data.meta.take} total={data.meta.total} onPageChange={onPageChange} page={page}/>
      </div>
    </>);
};
exports.default = PropertyCategoryList;
