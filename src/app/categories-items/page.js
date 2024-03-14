import CategoriesPost from "../../components/form/form-categories/CategoriesPost";
import FormCategories from "../../components/form/form-categories/FormCategories";
import NavTabs from "../../components/layout/NavTabs";

export default function CategoriesPage() {

    return (
        <section className="max-w-2xl mx-auto relative top-4">
            <NavTabs isAdmin={true} />
            <FormCategories />
            <CategoriesPost />
        </section>
    )
}