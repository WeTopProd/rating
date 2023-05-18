import { createContext, useState} from "react";


export const contextVakan = createContext()


export default function ContextTwo(props) {

    const [NameVakan, setNameVakan] = useState('')

    const [Spec, setSpec] = useState('')

    const [NameKompany, setNameKompany] = useState('')

    const [AboutKompany, setAboutKompany] = useState('')

    const [Requirement, setRequirement] = useState('')

    const [conditions, setConditions] = useState('')

    const [ZpOt, setZpOt] = useState('')

    const [ZpDo, setZpDo] = useState('')

    const [Experience, setExperience] = useState('')

    const [ExperienceDo, setExperienceDo] = useState('')

    const [Type, setType] = useState('')

    const [TypeDo, setTypeDo] = useState('')

    return <contextVakan.Provider value={[

        NameVakan, setNameVakan,
        Spec, setSpec,
        NameKompany, setNameKompany,
        AboutKompany, setAboutKompany,
        Requirement, setRequirement,
        conditions, setConditions,
        ZpOt, setZpOt,
        ZpDo, setZpDo,
        Experience, setExperience,
        ExperienceDo, setExperienceDo,
        Type, setType,
        TypeDo, setTypeDo,

    
    ]}>{props.children}</contextVakan.Provider>
}