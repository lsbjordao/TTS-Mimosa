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


// Description of Mimosa texana
const Mimosa_texana = new Mimosa()
Mimosa_texana.specificEpithet = 'texana'

Mimosa_texana.stems = new Stems()

Mimosa_texana.stipule = new Stipule()
Mimosa_texana.stipule.margin = new MarginStipule()
Mimosa_texana.stipule.adaxial = new AdaxialStipule()
Mimosa_texana.stipule.abaxial = new AbaxialStipule()

Mimosa_texana.leaf = new Leaf()
Mimosa_texana.leaf.petiole = new Petiole()
Mimosa_texana.leaf.bipinnate = new Bipinnate()
Mimosa_texana.leaf.bipinnate.rachis = new Rachis()
Mimosa_texana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_texana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_texana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_texana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_texana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_texana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(8)
Mimosa_texana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 13)
Mimosa_texana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(14)
Mimosa_texana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_texana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_texana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_texana.inflorescence = new Inflorescence()
Mimosa_texana.inflorescence.peduncle = new Peduncle()
Mimosa_texana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_texana.flower = new Flower()
Mimosa_texana.flower.bracteole = new Bracteole()
Mimosa_texana.flower.calyx = new Calyx()
Mimosa_texana.flower.corolla = new Corolla()

Mimosa_texana.androecium = new Androecium()
Mimosa_texana.androecium.filaments = new Filaments()

Mimosa_texana.ginoecium = new Ginoecium()
Mimosa_texana.ginoecium.ovary = new Ovary()

Mimosa_texana.fruit = new Fruit()
Mimosa_texana.fruit.stipe = new Stipe()
Mimosa_texana.fruit.replum = new Replum()
Mimosa_texana.fruit.epicarp = new Epicarp()

Mimosa_texana.seed = new Seed()


// Description authorship
Mimosa_texana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_texana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa texana
export { Mimosa_texana }