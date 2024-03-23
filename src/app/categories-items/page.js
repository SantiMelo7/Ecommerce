import CategoriesPost from "../../components/form/CategoriesPost";
import InputCategories from "../../components/form/InputCategories";
import NavTabs from "../../components/layout/NavTabs";

export default function CategoriesPage() {

    return (
        <section className="max-w-2xl mx-auto relative top-4">
            <NavTabs />
            <InputCategories />
            <CategoriesPost />
        </section>
    )
}