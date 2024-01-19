import * as yup from "yup"

export const studentFormvalidationSchema = yup
    .object({
        emailId: yup.string().required(),
        institution: yup.string().required(),
        student: yup.string().required(),
        dwms: yup.string().required(),
        // Curation Activities
        c1: yup.boolean().required(),
        c2: yup.boolean().required(),
        c3: yup.boolean().required(),
        c4: yup.boolean().required(),
        c5: yup.boolean().required(),
        c6: yup.boolean().required(),
        c7: yup.boolean().required(),
        // Industry Connect Activities
        i1: yup.boolean().required(),
        i2: yup.boolean().required(),
        i3: yup.boolean().required(),
        // Placement Activities
        p1: yup.boolean().required(),
        p2: yup.boolean().required(),
        p3: yup.boolean().required(),
        p4: yup.boolean().required(),
        p5: yup.boolean().required(),
        p6: yup.boolean().required(),
        p6Text: yup.string()

    })

export const institutionFormvalidationSchema = yup
    .object({
        emailId: yup.string().required(),
        institution: yup.string().required(),
        cordinator: yup.string().required(),
        strength: yup.string().required(),
        c1: yup.string().required(),
        c2: yup.boolean().required(),
        c3: yup.boolean().required(),
        c4: yup.boolean().required(),
        c5: yup.string().required(),
        c6: yup.string().required(),
        c7: yup.boolean().required(),
        c8: yup.boolean().required(),
        i1: yup.string().required(),
        i2: yup.boolean().required(),
        i3: yup.boolean().required(),
        p1: yup.string().required(),
        p2: yup.string().required(),
        p3: yup.string().required(),
        p4: yup.boolean().required(),
    })


export const adminFormvalidationSchema = yup
    .object({
        emailId: yup.string().required(),
        institution: yup.string().required(),
        cordinator: yup.string().required(),
        strength: yup.string().required(),
        c1: yup.string().required(),
        c2: yup.array().required(),
        c3: yup.string().required(),
        c4: yup.string().required(),
        i1: yup.string().required(),
        i2: yup.string().required(),
        i3: yup.boolean().required(),
        i4: yup.string().required(),
        i5: yup.string().required(),

    })
