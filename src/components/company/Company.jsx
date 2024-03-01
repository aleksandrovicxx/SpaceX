const Company = ({companyInfo}) =>{



    return <div>
        <div>
            <h1>{companyInfo.name}</h1>
            <p>Founder: <i>{companyInfo.founder}</i></p>
            <p>Employees: <i>{companyInfo.employees}</i></p>
            <p>
                <div>
                   {Object.keys(companyInfo.headquarters).map(key => (
                   <div key={key}>
                    {" "}
                    {key}:{companyInfo.headquarters[key]}{" "} </div>)
                   )}
                </div>
                <div>
                    <h4>Link:</h4>
                    {Object.keys(companyInfo.links).map(key => (
                        <div key={key}>
                            <a href={companyInfo.links[key]}>{companyInfo.links[key]} </a>
                        </div>
                    ))}
                </div>
            </p>
        </div>
    </div>
}

export default Company