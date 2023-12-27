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


// Description of Mimosa paucifolia
const Mimosa_paucifolia = new Mimosa()
Mimosa_paucifolia.specificEpithet = 'paucifolia'

Mimosa_paucifolia.stems = new Stems()

Mimosa_paucifolia.stipule = new Stipule()
Mimosa_paucifolia.stipule.margin = new MarginStipule()
Mimosa_paucifolia.stipule.adaxial = new AdaxialStipule()
Mimosa_paucifolia.stipule.abaxial = new AbaxialStipule()

Mimosa_paucifolia.leaf = new Leaf()
Mimosa_paucifolia.leaf.petiole = new Petiole()
Mimosa_paucifolia.leaf.bipinnate = new Bipinnate()
Mimosa_paucifolia.leaf.bipinnate.rachis = new Rachis()
Mimosa_paucifolia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_paucifolia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_paucifolia.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 3)
Mimosa_paucifolia.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(4)
Mimosa_paucifolia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_paucifolia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_paucifolia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_paucifolia.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 4)
Mimosa_paucifolia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_paucifolia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_paucifolia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_paucifolia.inflorescence = new Inflorescence()
Mimosa_paucifolia.inflorescence.peduncle = new Peduncle()
Mimosa_paucifolia.inflorescence.capitate = new CapitateInflorescence()

Mimosa_paucifolia.flower = new Flower()
Mimosa_paucifolia.flower.bracteole = new Bracteole()
Mimosa_paucifolia.flower.merism = '4-merous'
Mimosa_paucifolia.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_paucifolia.flower.calyx = new Calyx()
Mimosa_paucifolia.flower.corolla = new Corolla()

Mimosa_paucifolia.androecium = new Androecium()
Mimosa_paucifolia.androecium.filaments = new Filaments()
Mimosa_paucifolia.androecium.filaments.colour = 'pinkish'

Mimosa_paucifolia.ginoecium = new Ginoecium()
Mimosa_paucifolia.ginoecium.ovary = new Ovary()

Mimosa_paucifolia.fruit = new Fruit()
Mimosa_paucifolia.fruit.stipe = new Stipe()
Mimosa_paucifolia.fruit.replum = new Replum()
Mimosa_paucifolia.fruit.epicarp = new Epicarp()

Mimosa_paucifolia.seed = new Seed()


// Description authorship
Mimosa_paucifolia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_paucifolia.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa paucifolia
export { Mimosa_paucifolia }