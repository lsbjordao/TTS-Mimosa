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


// Description of Mimosa manidea
const Mimosa_manidea = new Mimosa()
Mimosa_manidea.specificEpithet = 'manidea'

Mimosa_manidea.stems = new Stems()

Mimosa_manidea.stipule = new Stipule()
Mimosa_manidea.stipule.margin = new MarginStipule()
Mimosa_manidea.stipule.adaxial = new AdaxialStipule()
Mimosa_manidea.stipule.abaxial = new AbaxialStipule()

Mimosa_manidea.leaf = new Leaf()
Mimosa_manidea.leaf.petiole = new Petiole()
Mimosa_manidea.leaf.bipinnate = new Bipinnate()
Mimosa_manidea.leaf.bipinnate.rachis = new Rachis()
Mimosa_manidea.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_manidea.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_manidea.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(18)
Mimosa_manidea.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(20, 30)
Mimosa_manidea.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_manidea.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_manidea.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_manidea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(7)
Mimosa_manidea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 16)
Mimosa_manidea.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_manidea.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_manidea.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_manidea.inflorescence = new Inflorescence()
Mimosa_manidea.inflorescence.peduncle = new Peduncle()
Mimosa_manidea.inflorescence.capitate = new CapitateInflorescence()

Mimosa_manidea.flower = new Flower()
Mimosa_manidea.flower.bracteole = new Bracteole()
Mimosa_manidea.flower.calyx = new Calyx()
Mimosa_manidea.flower.corolla = new Corolla()

Mimosa_manidea.androecium = new Androecium()
Mimosa_manidea.androecium.filaments = new Filaments()

Mimosa_manidea.ginoecium = new Ginoecium()
Mimosa_manidea.ginoecium.ovary = new Ovary()

Mimosa_manidea.fruit = new Fruit()
Mimosa_manidea.fruit.stipe = new Stipe()
Mimosa_manidea.fruit.replum = new Replum()
Mimosa_manidea.fruit.epicarp = new Epicarp()

Mimosa_manidea.seed = new Seed()


// Description authorship
Mimosa_manidea.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_manidea.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa manidea
export { Mimosa_manidea }