import { Sparklines, SparklinesLine } from "react-sparklines";

export function Chart(data) {
console.log(data);

    return (

        <section>
            <Sparklines data={data.data}>
                <SparklinesLine color="#F7931A" />
            </Sparklines>
        </section>
    );
}
