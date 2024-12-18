import { useSelector } from 'react-redux'
import { useAppSelector } from '@/app/hooks'
import { AlertDialog } from '@/shared/components/alert-dialog'
import { selectUser } from '@/features/user/slices/auth-slice'
import { selectPets } from '@/features/pet/slices/pet-slice'
import { Pet } from '@/features/pet/pet-types'
import { Container, Grid, Typography } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'

import { PetCard } from './pet-card'
import { FC, useState } from 'react'
import { AddPetButton } from '@/features/pet/components/add-pet-button'

export const PetList: FC = () => {
  const pets = useAppSelector(selectPets)
  const currentUser = useSelector(selectUser)
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const handleCloseAlert = () => setIsAlertOpen(false)

  const isLoading = useAppSelector(state => state.pet.isLoading)

  if (isLoading) {
    return <LinearProgress sx={{ marginTop: -2 }} />
  }

  return (
    <Container>
      <Grid alignItems={'center'} container justifyContent={'center'} marginBottom={5} spacing={5}>
        {pets.length === 0 && (
          <Grid item textAlign={'center'} xs={12}>
            <Typography sx={{ marginBottom: 2, marginTop: 4 }} variant={'h6'}>
              Pet shelter is empty. Would you like to add new pet?
            </Typography>
          </Grid>
        )}
        {pets.length > 0 &&
          pets.map((pet: Pet) => (
            <Grid item key={pet.id}>
              <PetCard pet={pet} />
            </Grid>
          ))}
        <Grid item>
          {!currentUser && <AlertDialog open={isAlertOpen} onClose={handleCloseAlert} />}
        </Grid>
        <div style={{ margin: '30px' }}>
          <AddPetButton />
        </div>
      </Grid>
    </Container>
  )
}
