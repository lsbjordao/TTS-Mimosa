// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa pseudofoliolosa
const Mimosa_pseudofoliolosa = new Mimosa()
Mimosa_pseudofoliolosa.specificEpithet = 'pseudofoliolosa'

Mimosa_pseudofoliolosa.stems = new Stems()

Mimosa_pseudofoliolosa.stipule = new Stipule()
Mimosa_pseudofoliolosa.stipule.margin = new MarginStipule()
Mimosa_pseudofoliolosa.stipule.adaxial = new AdaxialStipule()
Mimosa_pseudofoliolosa.stipule.abaxial = new AbaxialStipule()

Mimosa_pseudofoliolosa.leaf = new Leaf()
Mimosa_pseudofoliolosa.leaf.petiole = new Petiole()
Mimosa_pseudofoliolosa.leaf.bipinnate = new Bipinnate()
Mimosa_pseudofoliolosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_pseudofoliolosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pseudofoliolosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pseudofoliolosa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(12, 17)
Mimosa_pseudofoliolosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pseudofoliolosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pseudofoliolosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pseudofoliolosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 13)
Mimosa_pseudofoliolosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pseudofoliolosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pseudofoliolosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pseudofoliolosa.inflorescence = new Inflorescence()
Mimosa_pseudofoliolosa.inflorescence.peduncle = new Peduncle()
Mimosa_pseudofoliolosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pseudofoliolosa.flower = new Flower()
Mimosa_pseudofoliolosa.flower.bracteole = new Bracteole()
Mimosa_pseudofoliolosa.flower.merism = '4-merous'
Mimosa_pseudofoliolosa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_pseudofoliolosa.flower.calyx = new Calyx()
Mimosa_pseudofoliolosa.flower.corolla = new Corolla()
Mimosa_pseudofoliolosa.flower.corolla.shape = 'turbinate'

Mimosa_pseudofoliolosa.androecium = new Androecium()
Mimosa_pseudofoliolosa.androecium.filaments = new Filaments()
Mimosa_pseudofoliolosa.androecium.filaments.colour = 'pinkish'

Mimosa_pseudofoliolosa.ginoecium = new Ginoecium()
Mimosa_pseudofoliolosa.ginoecium.ovary = new Ovary()

Mimosa_pseudofoliolosa.fruit = new Fruit()
Mimosa_pseudofoliolosa.fruit.stipe = new Stipe()
Mimosa_pseudofoliolosa.fruit.replum = new Replum()
Mimosa_pseudofoliolosa.fruit.epicarp = new Epicarp()

Mimosa_pseudofoliolosa.seed = new Seed()


// Description authorship
Mimosa_pseudofoliolosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pseudofoliolosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pseudofoliolosa
export { Mimosa_pseudofoliolosa }