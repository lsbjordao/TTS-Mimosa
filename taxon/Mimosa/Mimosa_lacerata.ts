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


// Description of Mimosa lacerata
const Mimosa_lacerata = new Mimosa()
Mimosa_lacerata.specificEpithet = 'lacerata'

Mimosa_lacerata.stems = new Stems()

Mimosa_lacerata.stipule = new Stipule()
Mimosa_lacerata.stipule.margin = new MarginStipule()
Mimosa_lacerata.stipule.adaxial = new AdaxialStipule()
Mimosa_lacerata.stipule.abaxial = new AbaxialStipule()

Mimosa_lacerata.leaf = new Leaf()
Mimosa_lacerata.leaf.petiole = new Petiole()
Mimosa_lacerata.leaf.bipinnate = new Bipinnate()
Mimosa_lacerata.leaf.bipinnate.rachis = new Rachis()
Mimosa_lacerata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_lacerata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_lacerata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_lacerata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_lacerata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_lacerata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 11)
Mimosa_lacerata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(12)
Mimosa_lacerata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_lacerata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_lacerata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_lacerata.inflorescence = new Inflorescence()
Mimosa_lacerata.inflorescence.peduncle = new Peduncle()
Mimosa_lacerata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_lacerata.flower = new Flower()
Mimosa_lacerata.flower.bracteole = new Bracteole()
Mimosa_lacerata.flower.calyx = new Calyx()
Mimosa_lacerata.flower.corolla = new Corolla()

Mimosa_lacerata.androecium = new Androecium()
Mimosa_lacerata.androecium.filaments = new Filaments()

Mimosa_lacerata.ginoecium = new Ginoecium()
Mimosa_lacerata.ginoecium.ovary = new Ovary()

Mimosa_lacerata.fruit = new Fruit()
Mimosa_lacerata.fruit.stipe = new Stipe()
Mimosa_lacerata.fruit.replum = new Replum()
Mimosa_lacerata.fruit.epicarp = new Epicarp()

Mimosa_lacerata.seed = new Seed()


// Description authorship
Mimosa_lacerata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_lacerata.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa lacerata
export { Mimosa_lacerata }