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


// Description of Mimosa foliolosa
const Mimosa_foliolosa = new Mimosa()
Mimosa_foliolosa.specificEpithet = 'foliolosa'

Mimosa_foliolosa.stems = new Stems()

Mimosa_foliolosa.stipule = new Stipule()
Mimosa_foliolosa.stipule.margin = new MarginStipule()
Mimosa_foliolosa.stipule.adaxial = new AdaxialStipule()
Mimosa_foliolosa.stipule.abaxial = new AbaxialStipule()

Mimosa_foliolosa.leaf = new Leaf()
Mimosa_foliolosa.leaf.petiole = new Petiole()
Mimosa_foliolosa.leaf.bipinnate = new Bipinnate()
Mimosa_foliolosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_foliolosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_foliolosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_foliolosa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(10)
Mimosa_foliolosa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(12, 39)
Mimosa_foliolosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_foliolosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_foliolosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_foliolosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(26, 30)
Mimosa_foliolosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_foliolosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_foliolosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_foliolosa.inflorescence = new Inflorescence()
Mimosa_foliolosa.inflorescence.peduncle = new Peduncle()
Mimosa_foliolosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_foliolosa.flower = new Flower()
Mimosa_foliolosa.flower.bracteole = new Bracteole()
Mimosa_foliolosa.flower.merism = '4-merous'
Mimosa_foliolosa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_foliolosa.flower.calyx = new Calyx()
Mimosa_foliolosa.flower.corolla = new Corolla()

Mimosa_foliolosa.androecium = new Androecium()
Mimosa_foliolosa.androecium.filaments = new Filaments()
Mimosa_foliolosa.androecium.filaments.colour = 'pinkish'

Mimosa_foliolosa.ginoecium = new Ginoecium()
Mimosa_foliolosa.ginoecium.ovary = new Ovary()

Mimosa_foliolosa.fruit = new Fruit()
Mimosa_foliolosa.fruit.stipe = new Stipe()
Mimosa_foliolosa.fruit.replum = new Replum()
Mimosa_foliolosa.fruit.epicarp = new Epicarp()

Mimosa_foliolosa.seed = new Seed()


// Description authorship
Mimosa_foliolosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_foliolosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa foliolosa
export { Mimosa_foliolosa }