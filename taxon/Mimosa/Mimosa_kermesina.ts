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


// Description of Mimosa kermesina
const Mimosa_kermesina = new Mimosa()
Mimosa_kermesina.specificEpithet = 'kermesina'

Mimosa_kermesina.stems = new Stems()

Mimosa_kermesina.stipule = new Stipule()
Mimosa_kermesina.stipule.margin = new MarginStipule()
Mimosa_kermesina.stipule.adaxial = new AdaxialStipule()
Mimosa_kermesina.stipule.abaxial = new AbaxialStipule()

Mimosa_kermesina.leaf = new Leaf()
Mimosa_kermesina.leaf.petiole = new Petiole()
Mimosa_kermesina.leaf.bipinnate = new Bipinnate()
Mimosa_kermesina.leaf.bipinnate.rachis = new Rachis()
Mimosa_kermesina.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_kermesina.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_kermesina.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_kermesina.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(5)
Mimosa_kermesina.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_kermesina.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_kermesina.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_kermesina.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 5)
Mimosa_kermesina.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(6)
Mimosa_kermesina.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_kermesina.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_kermesina.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_kermesina.inflorescence = new Inflorescence()
Mimosa_kermesina.inflorescence.peduncle = new Peduncle()
Mimosa_kermesina.inflorescence.capitate = new CapitateInflorescence()

Mimosa_kermesina.flower = new Flower()
Mimosa_kermesina.flower.bracteole = new Bracteole()
Mimosa_kermesina.flower.calyx = new Calyx()
Mimosa_kermesina.flower.corolla = new Corolla()

Mimosa_kermesina.androecium = new Androecium()
Mimosa_kermesina.androecium.filaments = new Filaments()

Mimosa_kermesina.ginoecium = new Ginoecium()
Mimosa_kermesina.ginoecium.ovary = new Ovary()

Mimosa_kermesina.fruit = new Fruit()
Mimosa_kermesina.fruit.stipe = new Stipe()
Mimosa_kermesina.fruit.replum = new Replum()
Mimosa_kermesina.fruit.epicarp = new Epicarp()

Mimosa_kermesina.seed = new Seed()


// Description authorship
Mimosa_kermesina.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_kermesina.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa kermesina
export { Mimosa_kermesina }