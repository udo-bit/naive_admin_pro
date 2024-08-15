import QueryForm from "./query-form";
import BaseTable from "./base-table";

const proTable = defineComponent({
    name: "proTable",
    setup() {
        return () => (
            <div>
                <QueryForm/>
                <BaseTable/>
            </div>
        )
    }
})

export default proTable