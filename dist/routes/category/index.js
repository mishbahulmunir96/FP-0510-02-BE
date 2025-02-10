"use strict";
"use client";
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
const button_1 = require("@/components/ui/button");
const input_1 = require("@/components/ui/input");
const useCreateCatgory_1 = __importDefault(require("@/hooks/api/category/useCreateCatgory"));
const formik_1 = require("formik");
const react_1 = require("next-auth/react");
const PropertyCategoryList_1 = __importDefault(require("./components/PropertyCategoryList"));
const PropertyCategoryScema_1 = require("./schemas/PropertyCategoryScema");
const CategoryPage = ({ propertyCategoryId }) => {
    var _a;
    const session = (0, react_1.useSession)();
    const { mutateAsync: createCategory, isPending } = (0, useCreateCatgory_1.default)(Number((_a = session.data) === null || _a === void 0 ? void 0 : _a.user.id));
    const formik = (0, formik_1.useFormik)({
        initialValues: {
            name: "",
        },
        validationSchema: PropertyCategoryScema_1.PropertyCategorySchema,
        onSubmit: (values) => __awaiter(void 0, void 0, void 0, function* () {
            yield createCategory(values);
        }),
    });
    return (<div className="flex h-screen">
      <div className="flex flex-grow flex-col bg-gray-100 dark:bg-gray-900">
        {/* Main Dashboard Content */}
        <section className="container mx-auto max-w-7xl space-y-10 p-6">
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div>
                {/* Contoh Konten Utama */}
                <h5 className="mb-3 text-center font-semibold md:text-left">
                  Add Category
                </h5>
                <input_1.Input name="name" type="text" placeholder="Add category" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {!!formik.touched.name && !!formik.errors.name ? (<p className="text-xs text-red-500">{formik.errors.name}</p>) : null}
                <button_1.Button className="mt-3 w-full">
                  {isPending ? "Loading..." : "Submit"}
                </button_1.Button>
              </div>
            </form>
          </div>
          <div>
            <PropertyCategoryList_1.default propertyCategoryId={propertyCategoryId}/>
          </div>
        </section>
      </div>
    </div>);
};
exports.default = CategoryPage;
