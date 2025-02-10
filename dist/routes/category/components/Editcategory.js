"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditCategoryButton = void 0;
const button_1 = require("@/components/ui/button");
const dialog_1 = require("@/components/ui/dialog");
const input_1 = require("@/components/ui/input");
const label_1 = require("@/components/ui/label");
const useUpdateCategory_1 = __importDefault(require("@/hooks/api/category/useUpdateCategory"));
const formik_1 = require("formik");
const react_1 = require("react");
const PropertyCategoryScema_1 = require("../schemas/PropertyCategoryScema");
const EditCategoryButton = ({ id }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const { mutateAsync: updateCategory, isPending: pendingUpdate } = (0, useUpdateCategory_1.default)();
    const formik = (0, formik_1.useFormik)({
        initialValues: {
            name: "",
            id,
        },
        validationSchema: PropertyCategoryScema_1.PropertyCategorySchema,
        onSubmit: (values) => __awaiter(void 0, void 0, void 0, function* () {
            yield updateCategory(values);
            setIsOpen(false);
        }),
    });
    return (<dialog_1.Dialog open={isOpen} onOpenChange={setIsOpen}>
      <dialog_1.DialogTrigger asChild>
        <button_1.Button variant="outline" onClick={() => setIsOpen(true)}>
          Edit
        </button_1.Button>
      </dialog_1.DialogTrigger>
      <dialog_1.DialogContent className="sm:max-w-[425px]">
        <form onSubmit={formik.handleSubmit}>
          <dialog_1.DialogHeader>
            <dialog_1.DialogTitle>Edit Category</dialog_1.DialogTitle>
            <dialog_1.DialogDescription>
              Make changes to your category here. Click save when youre done.
            </dialog_1.DialogDescription>
          </dialog_1.DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label_1.Label htmlFor="name" className="text-right">
                Name
              </label_1.Label>
              <input_1.Input className="col-span-3" name="name" type="text" placeholder="Add category" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              {!!formik.touched.name && !!formik.errors.name ? (<p className="text-xs text-red-500">{formik.errors.name}</p>) : null}
            </div>
          </div>
          <dialog_1.DialogFooter>
            <button_1.Button type="submit" disabled={pendingUpdate}>
              {pendingUpdate ? "Updating..." : "Save"}
            </button_1.Button>
          </dialog_1.DialogFooter>
        </form>
      </dialog_1.DialogContent>
    </dialog_1.Dialog>);
};
exports.EditCategoryButton = EditCategoryButton;
