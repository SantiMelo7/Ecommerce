import CategoriesPost from "@/components/form/form-categories/CategoriesPost";
import FormCategories from "@/components/form/form-categories/FormCategories";
import NavTabs from "@/components/reutilizable/NavTabs";

export default function CategoriesPage() {

    return (
        <section className="max-w-lg mx-auto relative top-4">
            <NavTabs />
            <FormCategories />
            <CategoriesPost />
        </section>
    )
}