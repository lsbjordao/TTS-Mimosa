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


// Description of Mimosa claussenii
const Mimosa_claussenii = new Mimosa()
Mimosa_claussenii.specificEpithet = 'claussenii'

Mimosa_claussenii.stems = new Stems()

Mimosa_claussenii.stipule = new Stipule()
Mimosa_claussenii.stipule.margin = new MarginStipule()
Mimosa_claussenii.stipule.adaxial = new AdaxialStipule()
Mimosa_claussenii.stipule.abaxial = new AbaxialStipule()

Mimosa_claussenii.leaf = new Leaf()
Mimosa_claussenii.leaf.petiole = new Petiole()
Mimosa_claussenii.leaf.bipinnate = new Bipinnate()
Mimosa_claussenii.leaf.bipinnate.rachis = new Rachis()
Mimosa_claussenii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_claussenii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_claussenii.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(8)
Mimosa_claussenii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(10, 30)
Mimosa_claussenii.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(37)
Mimosa_claussenii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_claussenii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_claussenii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_claussenii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(14, 18)
Mimosa_claussenii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_claussenii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_claussenii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_claussenii.inflorescence = new Inflorescence()
Mimosa_claussenii.inflorescence.peduncle = new Peduncle()
Mimosa_claussenii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_claussenii.flower = new Flower()
Mimosa_claussenii.flower.bracteole = new Bracteole()
Mimosa_claussenii.flower.merism = '4-merous'
Mimosa_claussenii.flower.calyx = new Calyx()
Mimosa_claussenii.flower.corolla = new Corolla()

Mimosa_claussenii.androecium = new Androecium()
Mimosa_claussenii.androecium.filaments = new Filaments()

Mimosa_claussenii.ginoecium = new Ginoecium()
Mimosa_claussenii.ginoecium.ovary = new Ovary()

Mimosa_claussenii.fruit = new Fruit()
Mimosa_claussenii.fruit.stipe = new Stipe()
Mimosa_claussenii.fruit.replum = new Replum()
Mimosa_claussenii.fruit.epicarp = new Epicarp()

Mimosa_claussenii.seed = new Seed()


// Description authorship
Mimosa_claussenii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_claussenii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa claussenii
export { Mimosa_claussenii }