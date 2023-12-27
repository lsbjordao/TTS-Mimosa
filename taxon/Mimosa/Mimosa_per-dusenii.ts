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


// Description of Mimosa perDusenii
const Mimosa_perDusenii = new Mimosa()
Mimosa_perDusenii.specificEpithet = 'perDusenii'

Mimosa_perDusenii.stems = new Stems()

Mimosa_perDusenii.stipule = new Stipule()
Mimosa_perDusenii.stipule.margin = new MarginStipule()
Mimosa_perDusenii.stipule.adaxial = new AdaxialStipule()
Mimosa_perDusenii.stipule.abaxial = new AbaxialStipule()

Mimosa_perDusenii.leaf = new Leaf()
Mimosa_perDusenii.leaf.petiole = new Petiole()
Mimosa_perDusenii.leaf.bipinnate = new Bipinnate()
Mimosa_perDusenii.leaf.bipinnate.rachis = new Rachis()
Mimosa_perDusenii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_perDusenii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_perDusenii.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_perDusenii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_perDusenii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_perDusenii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_perDusenii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(4)
Mimosa_perDusenii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 9)
Mimosa_perDusenii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(10)
Mimosa_perDusenii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_perDusenii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_perDusenii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_perDusenii.inflorescence = new Inflorescence()
Mimosa_perDusenii.inflorescence.peduncle = new Peduncle()
Mimosa_perDusenii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_perDusenii.flower = new Flower()
Mimosa_perDusenii.flower.bracteole = new Bracteole()
Mimosa_perDusenii.flower.merism = '4-merous'
Mimosa_perDusenii.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_perDusenii.flower.calyx = new Calyx()
Mimosa_perDusenii.flower.corolla = new Corolla()
Mimosa_perDusenii.flower.corolla.shape = ['tubulose', 'funnelform']

Mimosa_perDusenii.androecium = new Androecium()
Mimosa_perDusenii.androecium.filaments = new Filaments()
Mimosa_perDusenii.androecium.filaments.colour = 'pinkish'

Mimosa_perDusenii.ginoecium = new Ginoecium()
Mimosa_perDusenii.ginoecium.ovary = new Ovary()

Mimosa_perDusenii.fruit = new Fruit()
Mimosa_perDusenii.fruit.stipe = new Stipe()
Mimosa_perDusenii.fruit.replum = new Replum()
Mimosa_perDusenii.fruit.epicarp = new Epicarp()

Mimosa_perDusenii.seed = new Seed()


// Description authorship
Mimosa_perDusenii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_perDusenii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa perDusenii
export { Mimosa_perDusenii }