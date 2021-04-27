import React from 'react'
import { ScreenContainer } from './styled'
import CandidateCard from './CandidateCard'

const Candidates = (candidatess, id, refresh) =>{
     const candidatosComponent = candidatess.map((candidate) =>{
        return <CandidateCard
            candidate={candidate}
        />
    })
    return {candidatosComponent}
}
export default Candidates