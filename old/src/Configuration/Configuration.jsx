import React from 'react'
import {
    Route,
    Routes
} from "react-router-dom";
import Index from '../Pages/Index';
import EassyEditing from '../Pages/EassyEditing';
import AssignmentEditing from '../Pages/AssignmentEditing';
import DissertationEditing from '../Pages/DissertationEditing';
import ThesisEditing from '../Pages/ThesisEditing'
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import TermAndCondition from '../Pages/TermAndCondition';
import MoneyBackGuarantee from '../Pages/MoneyBackGuarantee';
import RevisionPolicy from '../Pages/RevisionPolicy';
import PlagiarismChecker from '../Pages/PlagiarismChecker';
import PageNoteFound from '../Pages/404page';
const Configuration = () => {
    return (
        <>
            <Routes>
                <Route index element={<Index />} />
                <Route path="/eassy-editing" element={<EassyEditing />} />
                <Route path="/assignment-editing" element={<AssignmentEditing />} />
                <Route path="/dissertation-editing" element={<DissertationEditing />} />
                <Route path="/thesis-editing" element={<ThesisEditing />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermAndCondition />} />
                <Route path="/money-back-guarantee" element={<MoneyBackGuarantee />} />
                <Route path="/revision-policy" element={<RevisionPolicy />} />
               

                <Route path="/plagiarism-checker" element={<PlagiarismChecker />} />

                <Route path="*" element={<PageNoteFound/>}  />
            </Routes>


        </>
    )
}

export default Configuration
