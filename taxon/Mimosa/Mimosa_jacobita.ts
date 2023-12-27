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


// Description of Mimosa jacobita
const Mimosa_jacobita = new Mimosa()
Mimosa_jacobita.specificEpithet = 'jacobita'

Mimosa_jacobita.stems = new Stems()

Mimosa_jacobita.stipule = new Stipule()
Mimosa_jacobita.stipule.margin = new MarginStipule()
Mimosa_jacobita.stipule.adaxial = new AdaxialStipule()
Mimosa_jacobita.stipule.abaxial = new AbaxialStipule()

Mimosa_jacobita.leaf = new Leaf()
Mimosa_jacobita.leaf.petiole = new Petiole()
Mimosa_jacobita.leaf.bipinnate = new Bipinnate()
Mimosa_jacobita.leaf.bipinnate.rachis = new Rachis()
Mimosa_jacobita.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_jacobita.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_jacobita.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_jacobita.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_jacobita.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_jacobita.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_jacobita.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(21)
Mimosa_jacobita.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(25, 47)
Mimosa_jacobita.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(50)
Mimosa_jacobita.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_jacobita.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_jacobita.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_jacobita.inflorescence = new Inflorescence()
Mimosa_jacobita.inflorescence.peduncle = new Peduncle()
Mimosa_jacobita.inflorescence.capitate = new CapitateInflorescence()

Mimosa_jacobita.flower = new Flower()
Mimosa_jacobita.flower.bracteole = new Bracteole()
Mimosa_jacobita.flower.merism = '4-merous'
Mimosa_jacobita.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_jacobita.flower.calyx = new Calyx()
Mimosa_jacobita.flower.calyx.shape = 'paleaceous-pappiform'
Mimosa_jacobita.flower.corolla = new Corolla()
Mimosa_jacobita.flower.corolla.shape = 'turbinate'

Mimosa_jacobita.androecium = new Androecium()
Mimosa_jacobita.androecium.filaments = new Filaments()
Mimosa_jacobita.androecium.filaments.colour = 'pinkish'

Mimosa_jacobita.ginoecium = new Ginoecium()
Mimosa_jacobita.ginoecium.ovary = new Ovary()

Mimosa_jacobita.fruit = new Fruit()
Mimosa_jacobita.fruit.stipe = new Stipe()
Mimosa_jacobita.fruit.replum = new Replum()
Mimosa_jacobita.fruit.epicarp = new Epicarp()

Mimosa_jacobita.seed = new Seed()


// Description authorship
Mimosa_jacobita.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_jacobita.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa jacobita
export { Mimosa_jacobita }