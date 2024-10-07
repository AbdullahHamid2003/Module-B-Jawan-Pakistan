export default function SMSelect(props) {
    const { options, label, getValue } = props;

    let selectChange = (val) => {
        getValue(val)
    }
    return (
        <div>
            <p>{label}</p>
            <select>
                {
                options && Array.isArray(options) && options.map((x, i) => {
                    <option key={x.i} value={x.value}>
                    {x.displayName}</option>
                })
                }
            </select>
        </div>
    )
}